import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
return (
    <>
      {/* navbar */}
    <nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor: '#0f1730'}}>
        <div className="container-fluid">
        <a className="navbar-brand" href="#">Boo-boo hotel</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" href="/register">register</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
            </li>
            </ul>
        </div>
        </div>
    </nav>



    <div className="row">
    <div className="col-md-6">
        <div className="gambar">
        <img src="img/ht3.jpg" alt="" className='img-fluid'/>
        </div>
    </div>

    <div className="col-md-6">
    <div className="loginF d-flex justify-content-center" style={{marginTop: '100px'}}>
        <div className="card p-3" style={{width: '20rem'}}>
            <form action='' method='POST'>
                <div className="mb-2">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">telp</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">password</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <button type="submit" className="btn btn-primary" style={{width: '100%'}}>Enter</button>
            </form>
        </div>
    </div>
    </div>
</div>



    <section >
        <footer className="text-center text-lg-start">
            <div className="text-center text-navy p-3">
                <b>&#9400; 2022</b>
            </div>
        </footer>
    </section>
    </>
  )
}
