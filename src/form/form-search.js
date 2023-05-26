import React from 'react'

export default function FormSearch() {
    const textKW = Reaact.useRef()
    const btnSearch = React.useRef()
    const onChangeKW = () =>{
        if (textKW.current.value.trim() !== ''){
            btnSearch.current.disabled = false
        }else{
            btnSearch.current.disabled = true
        }
    }
  return (
    <form>
        <input type="text" name="kw" placeholder="ค้นหา" ref={textKW}
        onInput={onChangeKW}/>
        <button ref={btnSearch} disabled>ค้นหา</button>
    </form>
  )
}