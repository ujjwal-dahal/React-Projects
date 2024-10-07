


const ClickButton = (props)=>{
  return <>

<button type="button" style={{"margin":"0px 5px 0px 5px"}} className={`btn btn-${props.tag}`} onClick={props.clickBtn}>{ props.buttonName }</button>

  </>
}


export default ClickButton;