
import './Requisitions.css';

function Requisitions() {
  return (
    <div className="rightBodyContent">
       <h3>
       Requisitions
        </h3>
        <div className='RequisitionsBodyContent'>
        <div className='searchBar'>
            <label>
                Search by Requisition number:
                <input type='text' placeholder='00-00000'/>
            </label>
            
        </div>
        <div className='filter'>
            <p>
                Filter by Requisition status:
            </p>
            <label>
            <input type="radio" value="all" checked={true} />
            All
          </label>
          <label>
            <input type="radio" value="Pending" checked={false} />
            Pending
          </label>
          <label>
            <input type="radio" value="Open" checked={false} />
            Open
          </label>
          <label>
            <input type="radio" value="Closed" checked={false} />
            Closed
          </label>
        </div>
        <div className='filterByAuthor'>
        <label>
            Filter by auther:
        </label>
        <select name="auther" id="cars">
            <option value="SelectAll">Select All</option>
            <option value="Sai">Sai</option>
            <option value="Kamal">Kamal</option>
            <option value="Chandan">Chandan</option>
        </select>
        </div>    
        </div>
    </div>
  );
}

export default Requisitions;
