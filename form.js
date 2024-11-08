


document.querySelector("button").addEventListener("click",(e)=>{e.preventDefault();
    let country = document.getElementById("country").value;
    let city = document.getElementById("city").value;
    let course = document.getElementById("course").value;
    let proficiency = document.getElementById("proficiency").value;
    let qualification = document.getElementById("qualification").value;
    let isLaptop = document.getElementById("have-laptop").value;
    let gender = document.getElementById("gender").value;
    let fullName = document.getElementById("full-name").value;
    let fatherNAme = document.getElementById("father-name").value;
    let phone = document.getElementById("phone").value;
    let cnic = document.getElementById("cnic").value;
    let fatherCnic = document.getElementById("father-cnic").value;
    let email = document.getElementById("email").value;
    let datOfBirth = document.getElementById("dob").value;
    let address = document.getElementById("address").value;
    console.log(`Country:${country}
City:${city}
Course:${course}
Proficiency:${proficiency}
Full Name:${fullName}
Father Name:${fatherNAme}
Email:${email}
Phone:${phone}
CNIC:${cnic}
Father CNIC:${fatherCnic}
Date of Birth:${datOfBirth}
Gender:${gender}
Address:${address}
Qualification:${qualification}
Have Laptop:${isLaptop}`
);
})