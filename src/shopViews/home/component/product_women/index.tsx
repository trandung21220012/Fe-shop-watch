import { transformRoute } from "/@/router/hook"
import { renderProduct } from "/@/shopViews/product-template"

const ProductWomen = () => {
    return (
        <>
<section className="section_product section_product2">
  <div className="container">
    <div className="block-background">
      <div className="group_title_index">
        <h3 className="title">
          <img
            title="title"
            width={60}
            height={60}
            className="lazyload loaded"
            src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/wristwatch.png?1696125396195"
            data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/wristwatch.png?1696125396195"
            data-was-processed="true"
          />
          <a className="title-name" href="dong-ho-nu" title="Đồng hồ nữ">
            Đồng hồ nữ
          </a>
        </h3>
        <ul className="menu-title">
          <li className="nav-item">
            <a className="a-img" href="/chat-lieu-day" title="CHẤT LIỆU DÂY">
              CHẤT LIỆU DÂY
            </a>
          </li>
          <li className="nav-item">
            <a
              className="a-img"
              href="/thuong-hieu-hot"
              title="THƯƠNG HIỆU HOT"
            >
              THƯƠNG HIỆU HOT
            </a>
          </li>
          <li className="nav-item">
            <a
              className="a-img"
              href="/cac-dong-dac-biet"
              title="CÁC DÒNG ĐẶC BIỆT"
            >
              CÁC DÒNG ĐẶC BIỆT
            </a>
          </li>
        </ul>
      </div>
      <div className="row">
        <div className="col-lg-4 col-xl-3 col-sm-4 col-12 order-2 order-md-1">
          <a className="image-effect" href="/collections/all" title="Banner">
            <img
              width={667}
              height={1000}
              className="lazyload loaded"
              src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/image_product2.png?1696125396195"
              data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/image_product2.png?1696125396195"
              alt="Banner"
              data-was-processed="true"
            />
          </a>
          <div className="trending">
            <div className="title-treding">Thương hiệu ưa chuộng nhất</div>
            <div className="thumb-treding">
              <a title="Citizen" href="/search/?query=vendor:Citizen">
                Citizen
              </a>
              <a title="Orien" href="/search/?query=vendor:Orien">
                Orien
              </a>
              <a title="Casio" href="/search/?query=vendor:Casio">
                Casio
              </a>
              <a title="Doxa" href="/search/?query=vendor:Doxa">
                Doxa
              </a>
              <a title="Saga" href="/search/?query=vendor:Saga">
                Saga
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-xl-9 col-sm-8 order-1 order-md-2">
          <div
            className="product-block product-swiper2 swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events swiper-container-multirow"
            style={{ cursor: "grab" }}
          >
            <div
              className="swiper-wrapper"
              style={{ width: 1210, transform: "translate3d(0px, 0px, 0px)" ,display:"unset"}}
            >
       <div className="row row-fix">
              {renderProduct(4)}
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        </>
    )
}

export default ProductWomen