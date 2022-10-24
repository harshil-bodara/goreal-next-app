const OfferCompo = ({ selected, offer }) => {
  return (
    <div className="col-lg-3 col-md-6 col-12">
      <div className={`rn-pricing style-4 ${selected ? "active" : ""}`}>
        <div className="pricing-table-inner">
          <div className="pricing-header">
            <div className="pricing">
              <h4 className="title">
                <a href="#"><span className="offer-count">{offer.count}</span>
                  <br /><span className="offer-cmt">
                    {offer.title}</span></a></h4>
            </div>
            <div className="pricing">
              <div className="price-wrapper"><span className="currency">$</span>
                <span className="price">{offer.rate}</span></div>
                {
                  offer.month ? <p className="price-title">{offer.month}</p>:""
                }
            </div>
          </div>
          <div className="pricing-body">
            <ul className="list-style--1">
              <li className="li-font"><i className="feather-check"></i> <strong>High</strong> Quality</li>
              <li className="li-font"><i className="feather-check"></i> <strong>No Password</strong> Needed</li>
              <li className="li-font"><i className="feather-check"></i> Drop <strong>Protection</strong></li>
              <li className="li-font"><i className="feather-check"></i> <strong>Safe</strong> & <strong>Easy</strong></li>
              <li className="li-font"><i className="feather-check"></i> <strong>Instant Delivery</strong> Guarenteed</li>
              <li className="li-font"><i className="feather-check"></i> <strong>7/24</strong> Support</li>
              <li className="li-font"><i className="feather-check"></i> <strong className="text-pink">Secure Payments</strong></li>
            </ul>
          </div>
          <div className="pricing-footer"><a className="btn-default" href="#">Purchase Now</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OfferCompo;