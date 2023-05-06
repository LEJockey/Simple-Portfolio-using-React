import React from "react";

export default function About() {
  return (
    <>
        <div className="about mt-5 py-5">

            <div className="container text-white">

                <div className="inner  mt-5 pt-5">

                    <h1 className="text-center ">ABOUT</h1>

                </div>

                <div className="lines d-flex align-items-center justify-content-center">

                    <div className="in-line"></div>

                    <div className="star">

                        <i className="fa-solid fa-star mx-3 text-white fs-2"></i>

                    </div>

                    <div className="in-line "></div>

                </div>


                <div className="row justify-content-center my-4  align-items-center">

                    <div className="col-md-4">

                        <div className="inner-r">

                            <p className="fs-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quibusdam, quae voluptatibus. Voluptatum provident recusandae ex 
                                corrupti consequuntur sequi repellendus a nulla laboriosam. Sint nobis et magnam, 
                                architecto perferendis necessitatibus quo!
                            </p>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="inner-r">

                            <p className="fs-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Vel illo iure odit? Dolor quae vel debitis veritatis expedita 
                                aut cum doloribus dolores sequi eaque incidunt natus ut vitae, nesciunt magni?
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    </>
  );
}
