'use Client'
import { useParams } from "next/navigation"
function ProductDetailInfo() {
  const params = useParams()
  console.log(params);

  return (
    <div>productDetail</div>
  )
}

export default ProductDetailInfo