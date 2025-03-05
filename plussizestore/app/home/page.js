"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <style jsx>{`
                .pageContainer {
                    background: url('/backgrndimages/bkgrnd/bg3.jpg') repeat;
                    background-size: contain; 
                    height: auto;
                    width: auto; 
                    min-height: 100vh;
                    width: 100vw;

                .search{
                    height: 40px;
                    width: 80%;
                    border-radius: 60px;
                    outline: none;
                    margin-right: -35px;
                    border: 2px solid rgb(158, 81, 93);
                }

                .btn0{
                    height: 40px;
                    width: 40%;
                    outline: none;
                    border: none;
                    background-color: rgb(158, 81, 93);
                    color: white;
                    border-radius: 30px;
                    font-weight: 700;
                    margin-right: 70px;
                }

                .item-container{
                    margin-top: 50px;
                    background: url('/backgrndimages/Items/banner.png')no-repeat;
                    margin-left:200px; 
                    background-size: contain;
                    height: 100vh;
                    width: 80%;
                }

                .sale-text{
                    margin-top: 200px;
                    position: absolute;
                }

                .card{
                    margin-left: 20px;
                }
            `}</style>

      <div className="pageContainer">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand d-flex align-items-center" href="#">
              <Image
                src="/backgrndimages/Index/logo.png"
                alt="Logo"
                className="logo me-5"
                width={50}
                height={50}
              />
              <span className="website-name">Plus Size Store</span>
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav m-auto my-2 my-lg-0">
                <a className="nav-link" href="#">
                  Home
                </a>
                <a className="nav-link" href="#">
                  Categories
                </a>
                <a className="nav-link" href="#">
                  About
                </a>
                <a className="nav-link" href="#">
                  Contact
                </a>
              </div>

              <form className="d-flex">
                <input
                  className="search px-2"
                  type="search"
                  placeholder="Search"
                />
                <button className="btn0" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>

        <section>
          <div className="item-container d-flex-row">
            <div className="sale-text">
              <h2
                style={{
                  marginLeft: "580px",
                  fontWeight: 600,
                  color: "green",
                  marginTop: "50px",
                }}
              >
                End of Season
              </h2>
              <h2
                style={{
                  marginTop: "20px",
                  marginLeft: "580px",
                  color: "goldenrod",
                  fontWeight: "bold",
                }}
              >
                SALE
              </h2>
              <h3
                style={{
                  marginTop: "20px",
                  marginLeft: "580px",
                  color: "green",
                  fontWeight: "bold",
                }}
              >
                Flat 10-20%
              </h3>
            </div>
          </div>
          <div>
            <h3 style={{ marginTop: "-250px", marginLeft: "50px" }}>
              Featured
            </h3>
            <div style={{ display: "flex" }}>
              <div
                className="card"
                style={{
                  width: "18rem",
                  marginLeft: "90px",
                  marginTop: "20px",
                }}
              >
                <Image
                  src="/backgrndimages/Items/FtrdItem1.jpg"
                  className="card-img-top"
                  alt="image1"
                  width={200}
                  height={350}
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
              <div
                className="card"
                style={{
                  width: "18rem",
                  marginLeft: "90px",
                  marginTop: "20px",
                }}
              >
                <Image
                  src="/backgrndimages/Items/FtrdItem2.jpg"
                  className="card-img-top"
                  alt="image1"
                  width={200}
                  height={350}
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
              <div
                className="card"
                style={{
                  width: "18rem",
                  marginLeft: "90px",
                  marginTop: "20px",
                }}
              >
                <Image
                  src="/backgrndimages/Items/FtrdItem3.jpg"
                  className="card-img-top"
                  alt="image1"
                  width={300}
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
              <div
                className="card"
                style={{
                  width: "18rem",
                  marginLeft: "90px",
                  marginTop: "20px",
                }}
              >
                <Image
                  src="/backgrndimages/Items/FtrdItem4.jpg"
                  className="card-img-top"
                  alt="image1"
                  width={200}
                  height={350}
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 style={{ marginTop: "70px", marginLeft: "50px" }}>
              Anarkali
            </h3>
            <div style={{ display: "flex" }}>
              <div
                className="card"
                style={{
                  width: "18rem",
                  marginLeft: "90px",
                  marginTop: "20px",
                }}
              >
                <Image
                  src="/backgrndimages/Items/anarkali1.jpg"
                  className="card-img-top"
                  alt="image1"
                  width={300}
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
              <div
                className="card"
                style={{
                  width: "18rem",
                  marginLeft: "90px",
                  marginTop: "20px",
                }}
              >
                <Image
                  src="/backgrndimages/Items/anarkali2.jpg"
                  className="card-img-top"
                  alt="image1"
                  width={300}
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
              <div
                className="card"
                style={{
                  width: "18rem",
                  marginLeft: "90px",
                  marginTop: "20px",
                }}
              >
                <Image
                  src="/backgrndimages/Items/anarkali3.jpg"
                  className="card-img-top"
                  alt="image1"
                  width={300}
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
              <div
                className="card"
                style={{
                  width: "18rem",
                  marginLeft: "90px",
                  marginTop: "20px",
                }}
              >
                <Image
                  src="/backgrndimages/Items/anarkali4.jpg"
                  className="card-img-top"
                  alt="image1"
                  width={300}
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 style={{ marginTop: "70px", marginLeft: "50px" }}>
              Lehenga
            </h3>
            <div style={{ display: "flex" }}>
              <div
                className="card"
                style={{
                  width: "18rem",
                  marginLeft: "90px",
                  marginTop: "20px",
                }}
              >
                <Image
                  src="/backgrndimages/Items/anarkali1.jpg"
                  className="card-img-top"
                  alt="image1"
                  width={300}
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
              <div
                className="card"
                style={{
                  width: "18rem",
                  marginLeft: "90px",
                  marginTop: "20px",
                }}
              >
                <Image
                  src="/backgrndimages/Items/anarkali2.jpg"
                  className="card-img-top"
                  alt="image1"
                  width={300}
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
              <div
                className="card"
                style={{
                  width: "18rem",
                  marginLeft: "90px",
                  marginTop: "20px",
                }}
              >
                <Image
                  src="/backgrndimages/Items/anarkali3.jpg"
                  className="card-img-top"
                  alt="image1"
                  width={300}
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
              <div
                className="card"
                style={{
                  width: "18rem",
                  marginLeft: "90px",
                  marginTop: "20px",
                }}
              >
                <Image
                  src="/backgrndimages/Items/anarkali4.jpg"
                  className="card-img-top"
                  alt="image1"
                  width={300}
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
