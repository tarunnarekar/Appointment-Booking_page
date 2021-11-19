import profileimg from './img/profileimg.png';
import './Main.css'

function Main() {
    return (
        <div>
            <h2 className="headline">
                Book Appoinment
            </h2>
            <div className="row">
                <div className="page col-md-4">
                    <input type="search" id="search" placeholder="search by name" required />
                    <button type="button" className="button1">View profile</button>

                    <div>
                        <table className="table">
                            <thead className="tb-head">
                                <th>Name</th>
                                <th>Mobile</th>
                                <th>DOB</th>

                            </thead>
                            <tbody className="tb-body">
                                <tr>
                                    <td>JHON WICK</td>
                                    <td>3654893545</td>
                                    <td>19/10/1993</td>
                                </tr>

                                <tr>
                                    <td>JHON WICK</td>
                                    <td>3468646456</td>
                                    <td>12/02/1990</td>
                                </tr>

                                <tr>
                                    <td>JHON WICK</td>
                                    <td>4486465465</td>
                                    <td>01/01/1983</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={profileimg} className="img-fluid rounded-start" alt="..." />
                                <p style={{ paddingLeft: '2em' }}>Jhon wick</p>
                            </div>
                            <div style={{ paddingLeft: '4em' }} className="col-md-8">
                                <div className="card-body">
                                    <table className="card-text">
                                        <tr>
                                            <td>Gender:</td>
                                            <td>Male</td>
                                        </tr>
                                        <tr>
                                            <td style={{ paddingBottom: '1em', paddingTop: '1em' }}>Age:</td>
                                            <td style={{ paddingBottom: '1em', paddingTop: '1em' }}>25</td>
                                        </tr>
                                        <tr>
                                            <td>City:</td>
                                            <td >Pune</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-md-7">
                    <div className="row page">
                        <div className="col-md-6">
                            <h3 style={{color:'blue'}}>Details</h3>
                            <input type="text" class="form-control" id="validationCustom01" value="Mark" required />
                            <div class="form-group">
                                <label for="inputState"></label>
                                <select id="inputState" class="form-control">
                                    <option selected>Appoinment Channel</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="inputState"></label>
                                <select id="inputState" class="form-control">
                                    <option selected>Dr.Peter Parker</option>
                                    <option>...</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <h3 style={{color:'blue'}}>Appoinment details</h3>
                            <table className="table">
                                <tr>
                                    <td>John Wick</td>
                                    <td>M-98488222</td>
                                </tr>
                                <tr>
                                    <td>Walking Appoinment</td>
                                    <td>
                                        <label class="switch">
                                            <input type="checkpage" id="togBtn" />
                                            <div class="component round"></div>
                                        </label>
                                    </td>
                                </tr>
                            </table>
                            <div className="row">
                                <div className="col-md-4">
                                    <div class="form-group">
                                        <h6 style={{ marginTop: '2em' }}>Schedule</h6>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div class="form-group">
                                        <label for="inputState"></label>
                                        <select id="inputState" class="form-control">
                                            <option selected>Date</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div class="form-group">
                                        <label for="inputState"></label>
                                        <select id="inputState" class="form-control">
                                            <option selected>Time</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <hr />
                            <br />
                            <h2 style={{color:'blue'}}>Vital Information</h2>

                        </div>
                        <div className="col-md-6">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value="Reason"></textarea>
                        </div>

                        <div className="col-md-6">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value="Note for Doctor"></textarea>

                        </div>
                        <div className="col-md-6">
                            <button style={{marginLeft:'10em'}} className="btn2" type="submit">Cancel</button>
                        </div>
                        <div className="col-md-6">
                            <button className="btn2" type="reset">Book</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Main;