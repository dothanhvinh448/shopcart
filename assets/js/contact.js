var loi = "";
    var tdn = document.getElementById("name");
    var mk = document.getElementById("password");
    var mk1 = document.getElementById("password1");
    var fn = document.getElementById("firstname");
    var ln = document.getElementById("lastname");
    var em = document.getElementById("email");
    var pn = document.getElementById("phone");
    var regexNumber = /\d+/g;
    function KIEMTRA(){
        var loi = "";
          if(fn.value==""){
            fn.className="form-control loi";
            loi += "Họ trống<br>";
          }else if(fn.value.length<2){
            fn.className="form-control loi";
            loi += "Họ của bạn phải lớn hơn 2 ký tự<br>";
          }else fn.className="form-control";
        // kiểm tra tên 
        if(ln.value==""){
            ln.className="form-control loi";
            loi += "Tên trống<br>";
          }else if(ln.value.length<2){
            ln.className="form-control loi";
            loi += "Tên của bạn phải lớn hơn 2 ký tự<br>";
          }else ln.className="form-control";
          
        // kiểm tra email 
        if(em.value==""){
          em.className="form-control loi";
          loi+="Email trống<br>"
        }
       
    
        // kiểm tra số điên thoại
        if(pn.value==""){
          pn.className="form-control loi";
          loi += "Số điện thoại trống <br>"
        }
        if(loi!=""){
          document.getElementById('baoloi').innerHTML="<p>" + loi + "<p>";
            return false;
        }
      }
    
    
    function checkText() {
      const email = document.getElementById('email')
    const alert1 = document.querySelector('.alert1')
    
    //Biểu thức chính quy cho email
    const patternEmail = /^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/
      if (email.value.length == 0) {
        // chưa nhập email thì thông báo mất đi
        alert1.style.padding = '0'
        // set nội dung thông báo trống
        alert1.textContent = ''
      } else {
        // Đã nhập  gì đó vào email
        if (email.value.match(patternEmail)) {
          // đúng định dạng
          alert1.textContent = 'Email hợp lệ'
          alert1.style.color = '#14f0ba'
          document.getElementById('email').style.borderColor= "green";
        } else {
          console.log('khong dung')
          // không đúng định dạng
          alert1.style.padding = '0px 20px'
          alert1.textContent = 'Email không hợp lệ'
          alert1.style.color = '#f01448'
          document.getElementById('email').style.borderColor= "red";
        }
      }
    }
    
    email.addEventListener('keyup', () => {
      checkText()
    })
    
    // Mở chương trình lên thì check ngay là có gì trong email hay chưa
    // nếu chưa thì đóng thông báo lại
    
    checkText()
 
    function checkho(){
      const alert4 = document.querySelector('.alert4');
      if(fn.value.match(regexNumber)){
          alert4.style.padding = '0px 20px'
          alert4.textContent = 'Không được là số'
          alert4.style.color = '#f01448'
          document.getElementById('firstname').style.borderColor= "red";
      }else if(fn.value.length<=2){
        alert4.style.padding = '0px 20px'
          alert4.textContent = 'Lớn hơn 2 ký tự'
          alert4.style.color = '#f01448'
          document.getElementById('firstname').style.borderColor= "red";
      }else {
          alert4.textContent = 'hợp lệ'
          alert4.style.color = '#14f0ba'
          document.getElementById('firstname').style.borderColor= "green";
      }
    }
    function checkten(){
      const alert5 = document.querySelector('.alert5');
      if(ln.value.match(regexNumber)){
        alert5.style.padding = '0px 20px'
          alert5.textContent = 'Không được là số'
          alert5.style.color = '#f01448'
          document.getElementById('lastname').style.borderColor= "red";
      }else if(ln.value.length<=2){
        alert5.style.padding = '0px 20px'
          alert5.textContent = 'Lớn hơn 2 ký tự'
          alert5.style.color = '#f01448'
          document.getElementById('lastname').style.borderColor= "red";
      }else {
          alert5.textContent = 'hợp lệ'
          alert5.style.color = '#14f0ba'
          document.getElementById('lastname').style.borderColor= "green";
      }
    }
    function checkphone(){
      const alert6 = document.querySelector('.alert6');
      if(pn.value.length>=10 && pn.value.length<=11){
          alert6.textContent = 'hợp lệ'
          alert6.style.color = '#14f0ba'
          document.getElementById('phone').style.borderColor= "green";
      }else{
          alert6.style.padding = '0px 20px'
          alert6.textContent = 'Không hợp lệ 10-11 số'
          alert6.style.color = '#f01448'
          document.getElementById('phone').style.borderColor= "red";
      }
    }