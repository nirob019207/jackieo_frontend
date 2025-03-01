import BreadCrumb from '@/components/breadcrumb/BreadCrumb'
import Checkout from '@/components/Checkout/Checkout'
import RelatedProducts from '@/components/RelatedProducts/RelatedProducts'

export default function page() {
  return (
    <div className='container'>
      <BreadCrumb/>
      <Checkout/>
      <RelatedProducts/>
    </div>
  )
}
