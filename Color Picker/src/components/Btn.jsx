

const Btn = ({title , clickButton})=>{

  return <>
<button type="button" className="btn btn-warning" onClick={clickButton}> {title} </button>

  </>
}


export default Btn;