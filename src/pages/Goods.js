import { Link } from "react-router-dom"

const Goods = () => {
   const goods = [
      {
         id: 1,
         name: 'IPhone 14 Pro Max'
      },
      {
         id: 2,
         name: 'Iphone 14 Pro'
      },
      {
         id: 3,
         name: 'Samsung Galaxy S23 Ultra'
      }
   ]
   return (
      <div>
         Телефоны
         <div>
            {
               goods.map(item=> (
                  <>
                     <Link to={`/goods/${item.id}/${item.name}`} key={item.id}>
                        {item.name}
                     </Link>
                     <br/>
                  </>
               ))
            }
         </div>
      </div>
   )
}

export default Goods