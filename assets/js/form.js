// alert("Yeah, it is working!")
function validation() {

    const email = document.registration.email.value
    const firstName = document.registration.first_name.value
    const lastName = document.registration.last_name.value

    if (email.endsWith('@dci-student.org') == false) {
    alert('Email should end with @dci-student.org')
    return false
    })

}