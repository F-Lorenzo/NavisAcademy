import {useState,useEffect} from "react"
import {useParams} from 'react-router-dom'
import TeacherProfile from './TeacheProfile'
import {collection,getDoc,getFirestore,query,where,documentId} from 'firebase/firestore'

function TecherProfileContainer() {
  const [teacher,setTeacher]=useState({});
  const {teacherId} = useParams()
  useEffect(() => {
    setTeacher([])

    const db = getFirestore()

    const teacherCollection = collection(db, 'Teachers')
    const teacherFiltered = query(teacherCollection,where(documentId(), '==', `${teacherId}`)
    )
    getDoc(teacherId ? teacherFiltered : <span>ese Id no tiene profesor asignado</span>)
      .then((snapshot) => {
        setProductList(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      })
      .catch((error) => {
        console.log(error)
      })

    //funcion para cantidad de alumnos

    // crear funcion para obtener datos de los alumnos
  }, [teacherId])

  return (
    <div>
      <TeacherProfile teacher={teacher} />
    </div>
  )
}

export default TecherProfileContainer






