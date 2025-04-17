import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const CustomToast: React.FC = () => {
    return (
      <ToastContainer
        position="top-right"           // Vị trí hiển thị toast
        autoClose={3000}               // Thời gian tự đóng (ms)
        hideProgressBar={false}        // Hiển thị progress bar
        newestOnTop={false}            // Toast mới hiển thị dưới toast cũ
        closeOnClick                 // Đóng toast khi click
        rtl={false}                   // Hỗ trợ giao diện từ phải sang trái nếu cần
        pauseOnFocusLoss              // Tạm dừng autoClose khi window mất focus
        draggable                   // Cho phép kéo thả toast
        pauseOnHover                  // Tạm dừng autoClose khi hover
        theme="light"    
        limit={1}             // Giao diện toast, có thể là 'light', 'dark', 'colored'
      />
    );
  };
  
  export default CustomToast;