
export default function Form(){
    return(
        <div className="container-sm">
        <form>
        <div className="mb-3">
          <label className="form-label">Monto</label>
          <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label className="form-label">Cuotas</label>
          <input type="number" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3">
          <label className="form-label">interes Anual</label>
          <input type="number" className="form-control" id="exampleInputPassword1"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
    )

}