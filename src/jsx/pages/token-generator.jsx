import React from "react";
import Header3 from "../layout/header3";

function TokenGenerator() {
  return (
    <>
      <Header3 />
      {/* <Sidebar /> */}

      <div class="content-body">
        <div class="container-fluid">
          <div class="row">
          <div class="col-md-7 mx-auto">
                      <div class="chart-stat text-center">
                        <h2 class="d-inline-block ml-2 mb-3" style={{color:'#2CA579'}}>Contract Address</h2>
                        <h2 class="d-inline-block ml-2 mb-3">0x78a113264db5e133d3724534cd296f251789920d</h2>
                        <p class='mt-3'>
                        <button
                                  type="button"
                                  class="btn btn-outline-primary mt-3"
                                  style={{width:'50%', backgroundColor:'#34C38F', color:'#fff'}}
                                >
                                  Connect
                                </button>
                        </p>
                        <p class='mt-3'><button
                                type="submit"
                                name="submit"
                                class="btn btn-warning px-5"
                              >
                                QOHINOOR
                              </button></p>
                        <p class="mb-1">Claimable amount</p>
                        <strong class="mb-1">0 FEG</strong>
                        <p class='mt-3'><button
                                style={{width:'70%'}}
                                type="submit"
                                name="submit"
                                class="btn btn-success px-5"
                              >
                                Claim
                              </button></p>
                      </div>
                    </div>
                  
         </div>
        </div>
      </div>
    </>
  );
}

export default TokenGenerator;
