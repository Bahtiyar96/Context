import { useParams } from "react-router-dom";

function GoodsItem() {
  const images = [
    {
      id: 1,
      src: 'https://login.kg/image/cache/catalog/new/Phones/Apple/iPhone%2014/Pro-Pro%20Max/1-500x500.jpg'
    },
    {
      id: 2,
      src: 'https://login.kg/image/cache/catalog/new/Phones/Apple/iPhone%2014/Pro-Pro%20Max/1-500x500.jpg'
    },
    {
      id: 3,
      src: 'https://login.kg/image/cache/catalog/new/Phones/Samsung/S23%20Ultra/1-500x500.jpg'
    }
  ]
  const {id, title} = useParams();
  const params = useParams();
  return (
    <>
      <div>
        Товар под номером: {id}
      </div>
      <div>
        Название - {title}
      </div>
      <div>
        {
          images.map(img=> {
            if(img.id == id) {
              return (
                <img src={img.src} />
              )
            }
          })
        }
      </div>
    </>
  )
}

export default GoodsItem