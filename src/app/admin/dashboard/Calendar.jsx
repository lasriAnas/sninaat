"use client";
import * as ReactDOM from "react-dom";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
} from "@syncfusion/ej2-react-schedule";
import { useState, useEffect } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, db } from "utils/firebase";
import Firebase from "firebase/app";
import "firebase/firestore";
import { collection, query } from "firebase/firestore";

export default function Calendar() {
  const [data, setData] = useState([]);
  const appointmentsCollectionRef = collection(db, "appointments");
  const q = query(appointmentsCollectionRef);
  const [appointments] = useCollectionData(q, { idField: "id" });

  useEffect(() => {
    if (appointments) {
      const outputArray = appointments.map((obj, idx) => ({
        Id: idx + 1,
        Subject: `${obj.firstName} ${obj.lastName} ${obj.phone}`,
        StartTime: new Date(obj.dateTime.seconds * 1000),
        EndTime: new Date(obj.dateTime.seconds * 1000 + 3600000), // end time is one hour after start time
      }));
      setData(outputArray);
      console.log(outputArray);
    }
  }, [appointments]);
  if (data)
    return (
      <ScheduleComponent
        height="550px"
        selectedDate={new Date()}
        eventSettings={{ dataSource: data }}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    );
}
/*   function useFirestoreCollection(collection) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const unsub = db.collection(collection).onSnapshot((snapshot) => {
        const fetchedData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(fetchedData);
        setLoading(false);
      });
      return () => unsub();
    }, [collection]);

    return [data, loading];
  } */
/* let data = [
    {
      Id: 1,
      Subject: "Explosion of Betelgeuse Star",
      StartTime: new Date(2018, 1, 15, 9, 30),
      EndTime: new Date(2018, 1, 15, 11, 0),
    },
    {
      Id: 2,
      Subject: "Thule Air Crash Report",
      StartTime: new Date(2018, 1, 12, 12, 0),
      EndTime: new Date(2018, 1, 12, 14, 0),
    },
    {
      Id: 3,
      Subject: "Blue Moon Eclipse",
      StartTime: new Date(2018, 1, 13, 9, 30),
      EndTime: new Date(2018, 1, 13, 11, 0),
    },
    {
      Id: 4,
      Subject: "Meteor Showers in 2018",
      StartTime: new Date(2018, 1, 14, 13, 0),
      EndTime: new Date(2018, 1, 14, 14, 30),
    },
  ]; */
/* const eventSettings = { dataSource: data }; */
