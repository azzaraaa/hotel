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
                <a className="nav-link" aria-current="page" href="/register">Register</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

<div className="gambar">
  <img src="img/htl.jpg" alt="" style={{width: '100%'}}/>
</div>
      {/* rooms */}
      <div className="container pt-4 mb-4">
          <h1 className="text-center text-white">Rooms</h1>
        <div className="d-flex justify-content-center pt-4 gap-5">

              <div className="card shadow" style={{width: '18rem'}}>
                <img src="img/ht2.jpg" className="card-img-top" alt="img/facilities.jpg" />
                <div className="card-body text-center">
                  <h5 className="card-title">Queen Bed</h5>
                  <p className="card-text">Rp 600.000</p>
                </div>
              </div>

              <div className="card shadow" style={{width: '18rem'}}>
                <img src="img/ht2.jpg" className="card-img-top" alt="img/facilities.jpg" />
                <div className="card-body text-center">
                  <h5 className="card-title">Single Bed</h5>
                  <p className="card-text">Rp 250.000</p>
                </div>
              </div>

              <div className="card shadow" style={{width: '18rem'}}>
                <img src="img/ht2.jpg" className="card-img-top" alt="img/facilities.jpg" />
                <div className="card-body text-center">
                  <h5 className="card-title">Twin Bed</h5>
                  <p className="card-text">Rp 450.000</p>
                </div>
              </div>
        </div>
      </div>


      {/* contact */}
      <section className="contact pt-4 mb-4">
        <div className="container">
        <div className="row d-flex justify-content-center">

          <div className="col">
            <h1 className='text-center mb-4 text-dark'>Contact Us</h1>
            <p className='px-5 text-dark'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa soluta voluptas sed accusamus odio dignissimos quibusdam maiores fugit cupiditate perspiciatis laborum tempora, tempore ab dolores repellat molestias consequuntur natus repudiandae.</p>
            <div className="wa px-5 mb-2">
              <a href=""><i className="bi bi-whatsapp"></i> 0801283821</a>
            </div>
            
            <div className="mail px-5">
              <a href=""><i className="bi bi-envelope-paper"></i> ara@mine.com</a>
            </div>
          </div>
          
          <div className="col">
            <div className="card p-3" style={{width: '30rem'}}>
              <form action="" method="post">
                  <div className="mb-3 text-center">
                    <label className='from-label' htmlFor="">Nama</label>
                    <input type="text" name='nama' className='form-control'/>
                  </div>

                  <div className="mb-3 text-center">
                    <label className='from-label' htmlFor="">Email</label>
                    <input type="text" name='nama' className='form-control'/>
                  </div>

                  <div className="mb-4 text-center">
                    <label className='from-label' htmlFor="">No telp</label>
                    <input type="text" name='nama' className='form-control'/>
                  </div>

                  <div className="mb-3">
                    <button className='btn btn-primary' style={{width: '100%'}}>Enter</button>
                  </div>
              </form>
            </div>
          </div>
          </div>
        </div>
      </section>

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
