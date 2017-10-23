import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  mediaOptions = {
    audio: true,
    video: { width: 1280, height: 720 },
    facingMode: "user"
  }; //delete



  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginform = fb.group({
      "email": ["", Validators.required],
      "password": ["", Validators.required]
    })
  }

  ngOnInit() { }

  onSubmit() { }

  loginWithGoogle() {
    this.authService.loginWithGoogle();
  }

  facialRecognition() {
    console.log("In Facial Recognition");
    if (!navigator.mediaDevices.getUserMedia) {
      return alert('getUserMedia not supported in this browser.');
    }
    navigator.mediaDevices.getUserMedia(this.mediaOptions)
      .then(function (mediaStream) {
        console.log("Promise Successful");
        var video = document.querySelector('video');
        debugger;
        // var video = document.querySelector('');
        // Older browsers may not have srcObject
        debugger;
        if (video.hasAttribute("srcObject")) {
          video.srcObject = mediaStream;
        } else {
          // Avoid using this in new browsers, as it is going away.
          video.src = window.URL.createObjectURL(mediaStream);
        }
        video.onloadedmetadata = function (e) {
          video.play();
        };
      })
      .catch(function (err) { console.log(err.name + ": " + err.message); }); // alw;
  }

  success(stream) {
    window.URL.createObjectURL(stream);
  }
}
