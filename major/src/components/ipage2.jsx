import React from "react";
import "./css/ipage2.css";

import Navbar from "./routes/Navbar";
  export default function renderCard() {
    return (
      <>
      <Navbar></Navbar>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="card shadow" style={{ width: "30rem" , height: "220px" , marginLeft:"10px", borderRadius:"15px"}}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-8">
                    <h1 className="card-title">ARRAY</h1>
                    </div>
                    {/* <div className="col-lg-4">
                    <h5 class="card-title"></h5>
                    </div> */}
                    <div className="col-lg-4">
                    <img src="https://image.flaticon.com/icons/png/512/3024/3024163.png" width="50"></img>
                    </div>

                  </div>
                  <br></br>
                  <p className="card-text">Total Questions : 36 </p>
                  {/* <p className="card-text">Questions Completed : 0 </p> */}
                  <br></br>
                  <a href="/i1" id="Array" className="btn btn-primary round pl-5 pr-5 mt-3"><p className="btnc">Solve</p></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card shadow" style={{ width: "30rem" , height: "220px" , marginLeft:"10px", borderRadius:"15px"}}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-8">
                    <h1 className="card-title">MATRIX</h1>
                    </div>
                    {/* <div className="col-lg-4">
                    <h5 class="card-title"></h5>
                    </div> */}
                    <div className="col-lg-4">
                    <img src="https://ssppconsulting.com/wp-content/uploads/2019/07/structure-icon-1.png" width="50"></img>
                    </div>

                  </div>
                  <br></br>
                  <p className="card-text">Total Questions : 10 </p>
                  {/* <p className="card-text">Questions Completed : 0 </p> */}
                  <br></br>
                  <a href="/i2" id="Matrix" className="btn btn-primary round pl-5 pr-5 mt-3"><p className="btnc">Solve</p></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card shadow" style={{ width: "30rem" , height: "220px" , marginLeft:"10px", borderRadius:"15px"}}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-8">
                    <h1 className="card-title">STRING</h1>
                    </div>
                    {/* <div className="col-lg-4">
                    <h5 class="card-title"></h5>
                    </div> */}
                    <div className="col-lg-4">
                    <img src="https://cdn-icons.flaticon.com/png/512/3269/premium/3269804.png?token=exp=1639424735~hmac=922e0c74ea64bc1e9ff53cc36dc2694e" width="50"></img>
                    </div>

                  </div>
                  <br></br>
                  <p className="card-text">Total Questions : 43 </p>
                  {/* <p className="card-text">Questions Completed : 0 </p> */}
                  <br></br>
                  <a href="/i3" id="String" className="btn btn-primary round pl-5 pr-5 mt-3"><p className="btnc">Solve</p></a>
                </div>
              </div>
            </div>
           
          </div>

          <div className="row" style={{marginTop:"30px"}}>
            <div className="col-lg-4">
              <div className="card shadow" style={{ width: "30rem" , height: "220px" , marginLeft:"10px", borderRadius:"15px"}}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-8">
                    <h1 className="card-title">SEARCH AND SORT</h1>
                    </div>
                    {/* <div className="col-lg-4">
                    <h5 class="card-title"></h5>
                    </div> */}
                    <div className="col-lg-4">
                    <img src="https://image.flaticon.com/icons/png/512/603/603161.png" width="50"></img>
                    </div>

                  </div>
                  <br></br>
                  <p className="card-text">Total Questions : 36</p>
                  {/* <p className="card-text">Questions Completed : 0 </p> */}
                  <br></br>
                  <a href="/i4" id="Searching"className="btn btn-primary round pl-5 pr-5 mt-3"><p className="btnc">Solve</p></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card shadow" style={{ width: "30rem" , height: "220px" , marginLeft:"10px", borderRadius:"15px"}}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-8">
                    <h1 className="card-title">LINKED LIST</h1>
                    </div>
                    {/* <div className="col-lg-4">
                    <h5 class="card-title"></h5>
                    </div> */}
                    <div className="col-lg-4">
                    <img src="https://image.flaticon.com/icons/png/512/1660/1660882.png" width="50"></img>
                    </div>

                  </div>
                  <br></br>
                  <p className="card-text">Total Questions : 36 </p>
                  {/* <p className="card-text">Questions Completed : 0 </p> */}
                  <br></br>
                  <a href="/i5" id="LinkedList" className="btn btn-primary round pl-5 pr-5 mt-3"><p className="btnc">Solve</p></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card shadow" style={{ width: "30rem" , height: "220px" , marginLeft:"10px", borderRadius:"15px"}}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-8">
                    <h1 className="card-title">BINARY TREE</h1>
                    </div>
                    {/* <div className="col-lg-4">
                    <h5 class="card-title"></h5>
                    </div> */}
                    <div className="col-lg-4">
                    <img src="https://image.flaticon.com/icons/png/512/1449/1449141.png" width="50"></img>
                    </div>

                  </div>
                  <br></br>
                  <p className="card-text">Total Questions : 35 </p>
                  {/* <p className="card-text">Questions Completed : 0 </p> */}
                  <br></br>
                  <a href="/i6" id="BinaryTree" className="btn btn-primary round pl-5 pr-5 mt-3"><p className="btnc">Solve</p></a>
                </div>
              </div>
            </div>
            
           
          </div>
          <div className="row" style={{marginTop:"30px"}}>
            <div className="col-lg-4">
              <div className="card shadow" style={{ width: "30rem" , height: "220px" , marginLeft:"10px", borderRadius:"15px"}}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-8">
                    <h1 className="card-title">BST</h1>
                    </div>
                    {/* <div className="col-lg-4">
                    <h5 class="card-title"></h5>
                    </div> */}
                    <div className="col-lg-4">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Binary_search_tree.svg/300px-Binary_search_tree.svg.png" width="50"></img>
                    </div>

                  </div>
                  <br></br>
                  <p className="card-text">Total Questions : 22 </p>
                  {/* <p className="card-text">Questions Completed : 0 </p> */}
                  <br></br>
                  <a href="/i7" id="BST" className="btn btn-primary round pl-5 pr-5 mt-3"><p className="btnc">Solve</p></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card shadow" style={{ width: "30rem" , height: "220px" , marginLeft:"10px", borderRadius:"15px"}}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-8">
                    <h1 className="card-title">GREEDY</h1>
                    </div>
                    {/* <div className="col-lg-4">
                    <h5 class="card-title"></h5>
                    </div> */}
                    <div className="col-lg-4">
                    <img src="https://image.flaticon.com/icons/png/512/2932/2932697.png" width="50"></img>
                    </div>

                  </div>
                  <br></br>
                  <p className="card-text">Total Questions : 35 </p>
                  {/* <p className="card-text">Questions Completed : 0 </p> */}
                  <br></br>
                  <a href="/i8" id="Greedy" className="btn btn-primary round pl-5 pr-5 mt-3"><p className="btnc">Solve</p></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card shadow" style={{ width: "30rem" , height: "220px" , marginLeft:"10px", borderRadius:"15px"}}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-8">
                    <h1 className="card-title">BACKTRACKING</h1>
                    </div>
                    {/* <div className="col-lg-4">
                    <h5 class="card-title"></h5>
                    </div> */}
                    <div className="col-lg-4">
                    <img src="https://cdn-icons.flaticon.com/png/512/719/premium/719680.png?token=exp=1639424814~hmac=32432afa93b0ab11dd9951d94af69585" width="50"></img>
                    </div>

                  </div>
                  <br></br>
                  <p className="card-text">Total Questions : 19 </p>
                  {/* <p className="card-text">Questions Completed : 0 </p> */}
                  <br></br>
                  <a href="/i9" id="BackTracking" className="btn btn-primary round pl-5 pr-5 mt-3"><p className="btnc">Solve</p></a>
                </div>
              </div>
            </div>
            
           
          </div>
          <div className="row" style={{marginTop:"30px"}}>
            <div className="col-lg-4">
              <div className="card shadow" style={{ width: "30rem" , height: "220px" , marginLeft:"10px", borderRadius:"15px"}}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-8">
                    <h1 className="card-title">STACK AND QUEUES</h1>
                    </div>
                    {/* <div className="col-lg-4">
                    <h5 class="card-title"></h5>
                    </div> */}
                    <div className="col-lg-4">
                    <img src="https://image.flaticon.com/icons/png/512/2702/2702058.png" width="50"></img>
                    </div>

                  </div>
                  <br></br>
                  <p className="card-text">Total Questions : 38</p>
                  {/* <p className="card-text">Questions Completed : 0 </p> */}
                  <br></br>
                  <a href="/i10" id="stack" className="btn btn-primary round pl-5 pr-5 mt-3"><p className="btnc">Solve</p></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card shadow" style={{ width: "30rem" , height: "220px" , marginLeft:"10px", borderRadius:"15px"}}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-8">
                    <h1 className="card-title">HEAP</h1>
                    </div>
                    {/* <div className="col-lg-4">
                    <h5 class="card-title"></h5>
                    </div> */}
                    <div className="col-lg-4">
                    <img src="https://image.flaticon.com/icons/png/512/2192/2192436.png" width="50"></img>
                    </div>

                  </div>
                  <br></br>
                  <p className="card-text">Total Questions : 18 </p>
                  {/* <p className="card-text">Questions Completed : 0 </p> */}
                  <br></br>
                  <a href="/i11" id="Heap" className="btn btn-primary round pl-5 pr-5 mt-3"><p className="btnc">Solve</p></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card shadow" style={{ width: "30rem" , height: "220px" , marginLeft:"10px", borderRadius:"15px"}}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-8">
                    <h1 className="card-title">GRAPH</h1>
                    </div>
                    {/* <div className="col-lg-4">
                    <h5 class="card-title"></h5>
                    </div> */}
                    <div className="col-lg-4">
                    <img src="https://cdn-icons.flaticon.com/png/512/719/premium/719680.png?token=exp=1639424814~hmac=32432afa93b0ab11dd9951d94af69585" width="50"></img>
                    </div>

                  </div>
                  <br></br>
                  <p className="card-text">Total Questions : 44 </p>
                  {/* <p className="card-text">Questions Completed : 0 </p> */}
                  <br></br>
                  <a href="/i12" id="Graph" className="btn btn-primary round pl-5 pr-5 mt-3"><p className="btnc">Solve</p></a>
                </div>
              </div>
            </div>
            
           
          </div>
          <div className="row" style={{marginTop:"30px"}}>
            <div className="col-lg-4">
              <div className="card shadow" style={{ width: "30rem" , height: "220px" , marginLeft:"10px", borderRadius:"15px"}}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-8">
                    <h1 className="card-title">TRIE</h1>
                    </div>
                    {/* <div className="col-lg-4">
                    <h5 class="card-title"></h5>
                    </div> */}
                    <div className="col-lg-4">
                    <img src="https://cdn-icons.flaticon.com/png/512/719/premium/719680.png?token=exp=1639424814~hmac=32432afa93b0ab11dd9951d94af69585" width="50"></img>
                    </div>

                  </div>
                  <br></br>
                  <p className="card-text">Total Questions : 6 </p>
                  {/* <p className="card-text">Questions Completed : 0</p> */}
                  <br></br>
                  <a href="/i13" className="btn btn-primary round pl-5 pr-5 mt-3"><p className="btnc">Solve</p></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card shadow" style={{ width: "30rem" , height: "220px" , marginLeft:"10px", borderRadius:"15px"}}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-8">
                    <h1 className="card-title">DYNAMIC PROGRAMMING</h1>
                    </div>
                    {/* <div className="col-lg-4">
                    <h5 class="card-title"></h5>
                    </div> */}
                    <div className="col-lg-4">
                    <img src="https://image.flaticon.com/icons/png/512/1444/1444135.png" width="50"></img>
                    </div>

                  </div>
                  <br></br>
                  <p className="card-text">Total Questions : 60 </p>
                  {/* <p className="card-text">Questions Completed : 0 </p> */}
                  <br></br>
                  <a href="/i14" className="btn btn-primary round pl-5 pr-5 mt-3"><p className="btnc">Solve</p></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card shadow" style={{ width: "30rem" , height: "220px" , marginLeft:"10px", borderRadius:"15px"}}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-8">
                    <h1 className="card-title">BIT MANIPULATION</h1>
                    </div>
                    {/* <div className="col-lg-4">
                    <h5 class="card-title"></h5>
                    </div> */}
                    <div className="col-lg-4">
                    <img src="https://image.flaticon.com/icons/png/512/2214/2214581.png" width="50"></img>
                    </div>

                  </div>
                  <br></br>
                  <p className="card-text">Total Questions : 10 </p>
                  {/* <p className="card-text">Questions Completed : 0 </p> */}
                  <br></br>
                  <a href="/i15" className="btn btn-primary round pl-5 pr-5 mt-3"><p className="btnc">Solve</p></a>
                </div>
              </div>
            </div>
            
           
          </div>
          
        </div>
      </>
    );
  };
// };
