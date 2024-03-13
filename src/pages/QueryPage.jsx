import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchQuery } from "../store/querySlice"

const QueryPage = () => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.query.items)
  
  useEffect(() => {
    dispatch(fetchQuery())
  }, [])

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  )
}

export default QueryPage