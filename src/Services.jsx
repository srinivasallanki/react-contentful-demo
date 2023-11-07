import { useFetchSerivces } from './fetchServices'
const Services = () => {
  const { loading, ourSerives } = useFetchSerivces()
  //   console.log(ourSerives)
  if (loading) return <div>loading...</div>
  return (
    <div>
      <h2 className=' mb-5 text-5xl'>Services</h2>
      <div className=' bg-orange-200'>
        <div className=' grid grid-cols-3 gap-4'>
          {ourSerives.map((service) => {
            const { id, img, title, url } = service
            return (
              <div key={id}>
                <a href={url}>
                  <img src={img} alt={title} />
                </a>
                <h2 className='text-lg'>{title}</h2>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Services
