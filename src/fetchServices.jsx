import { createClient } from 'contentful'
import { useState, useEffect } from 'react'

const client = createClient({
  space: import.meta.env.VITE_SPACE,
  environment: 'master',
  accessToken: import.meta.env.VITE_KEY,
})

export const useFetchSerivces = () => {
  const [loading, setLoading] = useState(false)
  const [ourSerives, setOurServices] = useState([])

  const getData = async () => {
    try {
      setLoading(true)
      const response = await client.getEntries({
        content_type: 'services',
      })
      console.log(response)
      const myServices = response.items.map((item) => {
        const { title, image, url } = item.fields
        const id = item.sys.id
        const img = image?.fields?.file?.url
        return { title, img, id, url }
      })
      setOurServices(myServices)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return { loading, ourSerives }
}
