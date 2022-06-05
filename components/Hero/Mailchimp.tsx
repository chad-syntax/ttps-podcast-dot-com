import styled from 'styled-components';
import { useEffect } from 'react';

const StyledMailchimp = styled.div`
  background-color: ${(p) => p.theme.background};
  color: white;

  #mc_embed_signup {
    clear: left;
    font: 14px Helvetica, Arial, sans-serif;
    max-width: 500px;
    margin: 0 auto;
    h2 {
      font-family: ${(p) => p.theme.ffIbmPlex};
      font-weight: 400;
      text-align: center;
    }
    form {
      padding: 0.8rem;
      padding-left: 1.6rem;
    }
    .email {
      background-color: ${(p) => p.theme.background};
      border: none;
      border-bottom: 2px solid ${(p) => p.theme.offWhite};
      color: white;
      border-radius: 0;
    }
    input[type='submit'] {
      background-color: ${(p) => p.theme.buttonBg};
    }
  }
`;

export const Mailchimp = () => {
  useEffect(() => {
    const mailchimpScript = document.createElement('script');
    mailchimpScript.type = 'text/javascript';
    mailchimpScript.src =
      '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
    mailchimpScript.addEventListener('load', () => {
      (function ($) {
        window.fnames = new Array();
        window.ftypes = new Array();
        window.fnames[0] = 'EMAIL';
        window.ftypes[0] = 'email';
        window.fnames[1] = 'FNAME';
        window.ftypes[1] = 'text';
        window.fnames[2] = 'LNAME';
        window.ftypes[2] = 'text';
        window.fnames[3] = 'ADDRESS';
        window.ftypes[3] = 'address';
        window.fnames[4] = 'PHONE';
        window.ftypes[4] = 'phone';
        window.fnames[5] = 'BIRTHDAY';
        window.ftypes[5] = 'birthday';
      })(window.jQuery);
      var $mcj = window.jQuery.noConflict(true);
    });
  }, []);
  return (
    <StyledMailchimp>
      <link
        href="//cdn-images.mailchimp.com/embedcode/classic-10_7_dtp.css"
        rel="stylesheet"
        type="text/css"
      />
      <div id="mc_embed_signup">
        <form
          action="https://ttpspodcast.us20.list-manage.com/subscribe/post?u=0e920b5bbcacbff625c20139d&amp;id=5e925c35f8"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <h2>join the syntax tree mailing list to be kept up to date</h2>
            <div className="indicates-required">
              <span className="asterisk">*</span> indicates required
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">
                Email Address <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
              />
            </div>
            <div id="mce-responses" className="clear foot">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: 'none' }}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{ display: 'none' }}
              ></div>
            </div>
            <div
              style={{ position: 'absolute', left: '-5000px' }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_0e920b5bbcacbff625c20139d_5e925c35f8"
                tabIndex={-1}
              />
            </div>
            <div className="optionalParent">
              <div className="clear foot">
                <input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                />
                <p className="brandingLogo">
                  <a
                    href="http://eepurl.com/hQgJxj"
                    title="Mailchimp - email marketing made easy and fun"
                  >
                    <img
                      alt="made with mailchimp"
                      src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_light_dtp.svg"
                    />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </StyledMailchimp>
  );
};
