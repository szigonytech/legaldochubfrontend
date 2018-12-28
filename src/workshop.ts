/*
*
*  Push Notifications codelab
*  Copyright 2015 Google Inc. All rights reserved.
*
*  Licensed under the Apache License, Version 2.0 (the "License");
*  you may not use this file except in compliance with the License.
*  You may obtain a copy of the License at
*
*      https://www.apache.org/licenses/LICENSE-2.0
*
*  Unless required by applicable law or agreed to in writing, software
*  distributed under the License is distributed on an "AS IS" BASIS,
*  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*  See the License for the specific language governing permissions and
*  limitations under the License
*
*/

/* eslint-env browser, es6 */

"use strict";

// tslint:disable-next-line:max-line-length
const applicationServerPublicKey = "BNf6TB_vvy2YRZfduaJRXimUoxsoIZY6l5zBfhDHm2nBwL_TAna-39uxHaNPOu3sBdwVx5HdecYnyVDkfxjal-g";

// const pushButton: any = document.querySelector(".js-push-btn");
// let isSubscribed: any = false;
// let swRegistration: any = null;

// function urlB64ToUint8Array(base64String: any) {
//   const padding = "=".repeat((4 - base64String.length % 4) % 4);
//   const base64 = (base64String + padding)
//     .replace(/\-/g, "+")
//     .replace(/_/g, "/");

//   const rawData = window.atob(base64);
//   const outputArray = new Uint8Array(rawData.length);

//   for (let i = 0; i < rawData.length; ++i) {
//     outputArray[i] = rawData.charCodeAt(i);
//   }
//   return outputArray;
// }

// export function register() {
//   if ("serviceWorker" in navigator && "PushManager" in window) {

//     navigator.serviceWorker.register("sw.js")
//       .then(function (swReg: any) {

//         swRegistration = swReg;
//         initializeUI();
//       })
//       .catch(function (error: any) {
//       });
//   } else {
//     console.warn("Push messaging is not supported");
//     pushButton.textContent = "Push Not Supported";
//   }

// }
// function initializeUI() {
//   pushButton.addEventListener("click", function () {
//     pushButton.disabled = true;
//     if (isSubscribed) {
//       // TODO: Unsubscribe user
//       unsubscribeUser();
//     } else {
//       subscribeUser();
//     }
//   });
//   // Set the initial subscription value
//   swRegistration.pushManager.getSubscription()
//     .then(function (subscription: any) {
//       isSubscribed = !(subscription === null);

//       if (isSubscribed) {

//       } else {

//       }

//       updateBtn();
//     });
// }

// function updateBtn() {
//   if (Notification.permission === "denied") {
//     pushButton.textContent = "Push Messaging Blocked.";
//     pushButton.disabled = true;
//     updateSubscriptionOnServer(null);
//     return;
//   }
//   if (isSubscribed) {
//     pushButton.textContent = "Disable Push Messaging";
//   } else {
//     pushButton.textContent = "Enable Push Messaging";
//   }

//   pushButton.disabled = false;
// }

// function subscribeUser() {
//   const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
//   swRegistration.pushManager.subscribe({
//     userVisibleOnly: true,
//     applicationServerKey: applicationServerKey
//   })
//     .then(function (subscription: any) {

//       updateSubscriptionOnServer(subscription);

//       isSubscribed = true;

//       updateBtn();
//     })
//     .catch(function (err: any) {
//       updateBtn();
//     });
// }
// function unsubscribeUser() {
//   swRegistration.pushManager.getSubscription()
//     .then(function (subscription: any) {
//       if (subscription) {
//         return subscription.unsubscribe();
//       }
//     })
//     .catch(function (error: any) {
//     })
//     .then(function () {
//       updateSubscriptionOnServer(null);

//       isSubscribed = false;

//       updateBtn();
//     });
// }

// function updateSubscriptionOnServer(subscription: any) {
//   // TODO: Send subscription to application server

//   const subscriptionJson: any = document.querySelector(".js-subscription-json");
//   const subscriptionDetails: any =
//     document.querySelector(".js-subscription-details");

//   if (subscription) {
//     subscriptionJson.textContent = JSON.stringify(subscription);
//     subscriptionDetails.classList.remove("is-invisible");
//   } else {
//     subscriptionDetails.classList.add("is-invisible");
//   }
// }
