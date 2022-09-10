import {useState,useEffect} from "react"
import {useParams} from 'react-router-dom'
import {collection,getDocs,getFirestore,query,where,} from 'firebase/firestore'

function TecherProfileContainer() {
  const [teacher,setTeacher]=useState([]);
  const {teacherId} = useParams()
  useEffect(() => {
    setTeacher([])

    const db = getFirestore()

    const teacherCollection = collection(db, 'Teachers')
    const teacherFiltered = query(
      collection(db, 'Teachers'),
      where('teacherId', '==', `${teacherId}`),
    )

    getDocs(teacherId ? teacherFiltered : <span>ese Id no tiene profesor asignado</span>)
      .then((snapshot) => {
        setProductList(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      })
      .catch(() => {
        setError(true)
      })

    const alumnsQuantity = (teacher) => {
      let quantity = teacher.alumnsList;
      quantity = quantity.length;
      return quantity
    }

    // crear funcion para obtener datos de los alumnos
  }, [teacherId])

  return (
    <div>
      <TeacherProfile teacher={teacher} alumnsQuantity = {alumnsQuantity}/>
    </div>
  )
}

export default TecherProfileContainer






