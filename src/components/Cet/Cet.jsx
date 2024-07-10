import "./Cet.scss";

function Cet({total}) {
  return (
    <section className='Cet'>
        <h4>CET: 0,5%</h4>
        <p>Total: R$ {total}</p>
    </section>
  )
}

export default Cet