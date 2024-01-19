import { useState } from "react"
import OtpInput from "./OtpInput"




const PhoneOtpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState ('')
  const [showOTPInput,setShowOTPInput] = useState (false)
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value)
  }
  const handlePhoneSubmit = (e) => {
    e.preventDefault()

    // phone validation
    const regex = /[^0-9]/g;
    if(phoneNumber.length<10 || regex.test(phoneNumber)) {
      alert('invalid phone number')
      return
    }
    // call BE API
    // show OTP Field
    setShowOTPInput(true)
  }
  const onOtpSubmit = (otp) => {
    console.log('Login successfully', otp);
  }
  
  
  return (
    <div>
   { !showOTPInput ? ( <form onSubmit={()=>{}}>
    <input 
    type='text'
    value={phoneNumber}
    onChange={handlePhoneNumber}
    placeholder="Enter Phone Number"
    />
    <button type='button' onClick={handlePhoneSubmit}>Submit</button>
    </form> ) : (  <div>
    <p>Enter OTP sent to {phoneNumber}</p>
    <OtpInput length={4} onOtpSubmit={onOtpSubmit}/>
    </div> ) } 
    </div>
  )
}


export default PhoneOtpForm