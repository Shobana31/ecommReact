const Contact = () => {
    return ( 
        <>
          <div  id="contact" className="container-fluid w-50">
        <h1 className="display-5 text-center">
            Contact Us!
            <div className="spacer"></div>
        </h1>
 
   


    {/* <!-- bs5-form-grid--> */}
    <div className="mb-3">
        <label htmlFor="" className="form-label" >Name</label>
        <input
            type="text"
            name=""
            id=""
            className="form-control"
            placeholder=""
            aria-describedby="helpId"
        />
         </div>
   
    <div className="mb-3">
        <label htmlFor="" className="form-label"> Your Message</label>
        <textarea className="form-control" name="" id="" rows="3"></textarea>
    </div>
   
   
    {/* <!-- bs5-form-submit--> */}
  <button
    type="submit"
    className="btn btn-primary ">
    Submit
  </button>
 
</div>
        </>
     );
}
 
export default Contact;