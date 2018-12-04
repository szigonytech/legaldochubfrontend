// tslint:disable:no-console
// In production, we register a service worker to serve assets from local cache.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the 'N+1' visit to a page, since previously
// cached resources are updated in the background.

// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
// This link also includes instructions on opting out of this behavior.

// const isLocalhost = Boolean(
//   window.location.hostname === 'localhost' ||
//     // [::1] is the IPv6 localhost address.
//     window.location.hostname === '[::1]' ||
//     // 127.0.0.1/8 is considered localhost for IPv4.
//     window.location.hostname.match(
//       /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
//     )
// );
// tslint:disable-next-line:max-line-length
const applicationServerPublicKey = 'BNf6TB_vvy2YRZfduaJRXimUoxsoIZY6l5zBfhDHm2nBwL_TAna-39uxHaNPOu3sBdwVx5HdecYnyVDkfxjal-g';
import * as cookie from 'src/app/utils/cookie';

// tslint:disable-next-line:max-line-length
// const applicationServerPublicKey = 'BNZ3UL_30GFTwiGgfjnmvPaJHAj9Fa5Oa54urLCtTwoAAvkwDdC2BVUJva5KH6T40ONvFGF27f2eimIzDRdyqaE';
let swRegistration: any = null;
function urlB64ToUint8Array(base64String: any) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
export default function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(async function (swReg: any) {
        swRegistration = swReg;
        console.log(swReg);
        subscribeUser();
        // checkValidServiceWorker('null');
      })
      .catch(function (error: any) {
        console.log('Service Worker Error', error);
      });
  } else {
    console.warn('Push messaging is not supported');
    // pushButton.textContent = 'Push Not Supported';
  }
}
async function subscribeUser() {
  try {
    const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
    swRegistration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: applicationServerKey
    }).then(function (subscription: any) {
      console.log('User is subscribed.');
      console.log(JSON.stringify(subscription));
      cookie.set(cookie.SUBSCRIPTION_KEY, subscription);
      // updateSubscriptionOnServer(subscription);
    }).catch(function (err: any) {
      console.log('Failed to subscribe the user: ', err);
    });
  } catch (err) {
    console.log(err);
  }

}
export function unsubscribeUser() {
  swRegistration.PushManager.getSubscription()
    .then(function (subscription: any) {
      if (subscription) {
        return subscription.unsubscribe();
      }
    })
    .catch(function (error: any) {
      console.log('Error unsubscribing', error);
    })
    .then(function () {
      // updateSubscriptionOnServer(null);
      console.log('User is unsubscribed.');
      // updateBtn();
    });
}
function registerValidSW(swUrl: string) {
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker) {
          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                // At this point, the old content will have been purged and
                // the fresh content will have been added to the cache.
                // It's the perfect time to display a 'New content is
                // available; please refresh.' message in your web app.
                console.log('New content is available; please refresh.');
              } else {
                // At this point, everything has been precached.
                // It's the perfect time to display a
                // 'Content is cached for offline use.' message.
                console.log('Content is cached for offline use.');
              }
            }
          };
        }
      };
    })
    .catch(error => {
      console.error('Error during service worker registration:', error);
    });
}

export function checkValidServiceWorker(swUrl: string) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl)
    .then(response => {
      // Ensure service worker exists, and that we really are getting a JS file.
      if (
        response.status === 404 ||
        response.headers.get('content-type')!.indexOf('javascript') === -1
      ) {
        // No service worker found. Probably a different app. Reload the page.
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Service worker found. Proceed as normal.
        registerValidSW(swUrl);
      }
    })
    .catch(() => {
      console.log(
        'No internet connection found. App is running in offline mode.'
      );
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
