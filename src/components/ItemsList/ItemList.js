import { Item } from '../Item/Item'
import './ItemList.css'

export const ItemList = (items) => {
    const data = items
    return (
      <div className="item-list">
          <ul>
              <li>
                  <Item data={data} key={data.id}/>
              </li>
          </ul>
      </div>
    )
}