import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      {/* navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor: '#16213E'}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Boo-boo hotel</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="gambar">
        <img src="img/htl.jpg" alt="" style={{width: '100%'}}/>
      </div>

      {/* booking */}
      <div className=" d-flex justify-content-center p-5"  style={{backgroundColor: '#16213E'}}>
        <div className="bar shadow-lg p-5 d-flex justify-content-center bg-light">
          <div className="row">
              <div className="col">
                <label htmlFor="">Check in</label>
                <br/>
                <input type="date"></input>
              </div>
              <div className="col">
                <label htmlFor="">Check out</label>
                <br/>
                <input type="date"></input>
              </div>
              <div className="col">
                <label htmlFor="">Tipe</label>
                <br/>
                <select name="" id="">
                  <option value="">Queen</option>
                  <option value="">Twin</option>
                  <option value="">Single</option>
                </select>
              </div>
              <div className="col">
                <label htmlFor="">Berapa Kamar</label>
                <br/>
                <input type="number"></input>
              </div>
              <div className="col mt-3">
                <a href="#" className="btn btn-secondary text-white fw-semibold">Submit</a>
              </div>
          </div>
        </div>
      </div>

      <section>
          <footer className="text-center text-lg-start">
          <div className="text-center text-white p-3">
              <b>&#9400; 2022</b>
          </div>
        </footer>
      </section>
    </>
  )
}
