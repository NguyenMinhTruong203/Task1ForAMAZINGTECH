import React from 'react';
import $ from 'jquery';

function App() {
  const [cartCount, setCartCount] = React.useState(0);

  React.useEffect(() => {
    if (window.noPS) {
      $.get("/account.js", function (result) {
        if (result.email!= null) {
          setCartCount(0);
        } else {
          setCartCount(0);
        }
      });
    }
  }, []);

  return (
    <div>
      <script>
        {`
          if(window.noPS){
            var domain = 'https://tinhocngoisao.com';
            function setNofollow(domain){
              $('a').each(function(){
                var href = $(this).attr('href') || '';
                if(/http|https/.test(href) &&!new RegExp(domain).test(href)){
                  $(this).attr('rel', 'nofollow');
                }
              })
            }
            $(document).ready(function(){
              setNofollow(domain);
              var count = $('a').length;
              const interval = setInterval(function(){
                var re_count = $('a').length;
                if(re_count!= count){
                  return clearInterval(interval)
                }
                setNofollow(domain);
              }, 1000);
            })
            $('.cart-count').text('${cartCount}')
          }
        `}
      </script>
      <script>
        {`
          window.starbapSetting = {'show_title_review':true, 'show_date':true, 'show_author_review':true, 'allow_review_by_image':true, 'allow_review_by_video':true, 'show_sort_by':true, 'show_question_featured':true, 'show_share_social':true, 'show_reply':true, 'show_customer_had_order':true, 'approve_then_show':true, 'always_show_customer':true, 'color_bg_avatar':'#f7d805', 'color_progress_bar':'#f7d805', 'color_star':'#dfe519', 'color_customer':'#22b345', 'phone_require':false}
        `}
      </script>
      <script>
        {`
          if(window.noPS){
            var link_startbap = document.createElement('link');
            link_startbap.type = "text/css";
            link_startbap.rel = "stylesheet";
            link_startbap.href = "https://review.starbap.app/assets/lib/starbap/review-app.css";
            link_startbap.media = "all";
            document.head.appendChild(link_startbap);

           !function(e,t,n){var a=t.getElementsByTagName(n)[0],c=t.createElement(n);c.async=true,c.src="https://review.starbap.app/assets/lib/starbap/review-app.js",a.parentNode.insertBefore(c,a)}(window,document,"script");
          }
        `}
      </script>
      <script type="module">
        {`
          // Import the functions you need from the SDKs you need
          import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
          import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";

          // Your web app's Firebase configuration
          // For Firebase JS SDK v7.20.0 and later, measurementId is optional
          const firebaseConfig = {
            apiKey: "AIzaSyCs6zNd4XDwuupFg_VJZR99tdPgzpFVjC0",
            authDomain: "star-fc857.firebaseapp.com",
            projectId: "star-fc857",
            storageBucket: "star-fc857.appspot.com",
            messagingSenderId: "621131678740",
            appId: "1:621131678740:web:45a36d57faeb06973a9301",
            measurementId: "G-WZQ4Y5B3L0"
          };

          // Initialize Firebase
          const app = initializeApp(firebaseConfig);
          const analytics = getAnalytics(app);
        `}
      </script>
    </div>
  );
}

export default App;