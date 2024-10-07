import InputBox from "./InputBox";
import "../style/ListOfProduct.css";

function ListOfProduct() {
  let itemList = [
    //1 means Available and 0 means Out of Stock
    { Salt: 1 },
    { Sugar: 0 },
    { Masala: 1 },
    { Oil: 0 },
    { Flour: 1 },
    { Rice: 1 },
    { Eggs: 0 },
    { Noodles : 0}
  ];

  return (
    <>
      <div className="main-container">
        <ul className="list-group">
          <li className="list-group-item active" aria-current="true">
            Products List In My Market
          </li>
          {itemList.map((item, index) => {
            let objectKey = Object.keys(item);
            return (
              <li className="list-group-item" key={index}>
                {objectKey}
              </li>
            );
          })}
        </ul>
        <InputBox itemList={itemList} />
      </div>
    </>
  );
}

export default ListOfProduct;
