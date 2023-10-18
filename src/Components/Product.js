import { useNavigate } from "react-router-dom";

export default function Product() {
    const navigate = useNavigate();
    const handlePostProduct = () => navigate('/pproducts');
    const handleGetProduct = () => { navigate('/gproducts') }
    return (
        <div className='auth-post'>
               <h1>Product Information</h1>
        <div className="auth-bt-group">
            <button type="button" className="auth-btn green-bg white-txt" onClick={handlePostProduct}>Post</button>
             <button type="button" className="auth-btn black-bg" onClick={handleGetProduct}>Get</button>
             <button type="button" className="auth-btn black-bg" onClick={handleGetProduct}>Update</button>
             <button type="button" className="auth-btn black-bg" onClick={handleGetProduct}>Delete</button>
        </div>
        </div>
    )
}