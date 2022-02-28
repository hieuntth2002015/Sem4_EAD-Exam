document.addEventListener('DOMContentLoaded', function () {
    var btnSubmit = document.getElementById("btn-submit"); // gọi ra phần tử cần làm việc sử dụng id.
    var txtId = document.forms['product-form']['id']; // ko được lấy value, chỉ lấy text input.
    var txtName = document.forms['product-form']['name']; // ko được lấy value, chỉ lấy text input.
    var txtPrice = document.forms['product-form']['price']; // ko được lấy value, chỉ lấy text input.
    var txtThumbnail = document.forms['product-form']['thumbnail']; // ko được lấy value, chỉ lấy text input.
    var txtStatus = document.forms['product-form']['status']; // ko được lấy value, chỉ lấy text input.
    // ra chỉ thị cho nó
    btnSubmit.onclick = function (){
        var id = txtId.value; // tại thời điểm submit mới có giá trị.
        var name = txtName.value;
        var price = txtPrice.value;
        var thumbnail = txtThumbnail.value;
        var status = txtStatus.value;
        // validate nếu cần.
        // tạo ra đối tượng có định dạng json.
        var dataToSend = {
            "id": id,
            "name": name,
            "price": price,
            "thumbnail": thumbnail,
            "status": status
        }
        // xử lý request lên server.
        var xmlHttpRequest = new XMLHttpRequest();
        // sự kiện khi request thay đổi trạng thái
        xmlHttpRequest.onreadystatechange = function () {
            // kiểm tra khi trạng thái request đã hoàn thành (readyState = 1) và tạo thành công (status = 201) (thất bại = 500)
            if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 201) {
                alert('Create product success!');
                window.location.href = "/myclient-demo/index.html";
            }
        }
        xmlHttpRequest.open('post', 'http://localhost:8080/api/v1/products', false);
        // sửa kiểu dữ liệu gửi lên có định dang json, phải đứng sau hàm open
        xmlHttpRequest.setRequestHeader('Content-Type', 'application/json');
        xmlHttpRequest.send(JSON.stringify(dataToSend)); // gửi dữ liệu ở định dạng json.
    }
})
