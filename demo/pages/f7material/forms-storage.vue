<template>
  <div data-page="form-storage" class="page kitchen-sink-material">
    <div class="navbar">
      <div class="navbar-inner">
        <div class="left"><a class="back link icon-only" href="#"><i class="icon icon-back"></i></a></div>
        <div class="center">Form Storage</div>
      </div>
    </div>
    <div class="page-content">
      <div class="content-block">
        <p>With forms storage it is easy to store and parse forms data, especially on Ajax loaded pages. All you need to make it work is to add "store-data" class to your &lt;form&gt; and Framework7 will store form data with every input change. And the most
          awesome part is that when you load this page again Framework7 will parse this data and fill all form fields automatically! Just try to fill the form below and then go to any other page, or even you may close this site, and when you return here
          form fields will have kept your data.</p>
      </div>
      <div class="content-block-title">Personal Details</div>
      <form id="demoform-1" class="store-data list-block">
        <ul>
          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon material-icons"></i></div>
              <div class="item-inner">
                <div class="item-title label">Name</div>
                <div class="item-input">
                  <input type="text" placeholder="Your name" name="name">
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon material-icons"></i></div>
              <div class="item-inner">
                <div class="item-title label">E-mail</div>
                <div class="item-input">
                  <input type="email" placeholder="E-mail" name="email">
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon material-icons"></i></div>
              <div class="item-inner">
                <div class="item-title label">URL</div>
                <div class="item-input">
                  <input type="url" placeholder="URL" name="url">
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon material-icons"></i></div>
              <div class="item-inner">
                <div class="item-title label">Password</div>
                <div class="item-input">
                  <input type="password" placeholder="Password" name="password">
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon material-icons"></i></div>
              <div class="item-inner">
                <div class="item-title label">Phone</div>
                <div class="item-input">
                  <input type="tel" placeholder="Phone" name="phone">
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon material-icons"></i></div>
              <div class="item-inner">
                <div class="item-title label">Gender</div>
                <div class="item-input">
                  <select>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon material-icons"></i></div>
              <div class="item-inner">
                <div class="item-title label">Birth date</div>
                <div class="item-input">
                  <input type="date" placeholder="Birth day" value="2014-04-30" name="birth-date">
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon material-icons"></i></div>
              <div class="item-inner">
                <div class="item-title label">Switch</div>
                <div class="item-input">
                  <label class="label-switch">
                    <input type="checkbox" name="switch">
                    <div class="checkbox"></div>
                  </label>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon material-icons"></i></div>
              <div class="item-inner">
                <div class="item-title label">Slider</div>
                <div class="item-input">
                  <div class="range-slider">
                    <input type="range" min="0" max="100" value="50" step="0.1" name="slider">
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="align-top">
            <div class="item-content">
              <div class="item-media"><i class="icon material-icons"></i></div>
              <div class="item-inner">
                <div class="item-title label">About Me</div>
                <div class="item-input">
                  <textarea name="about-me" class="resizable"></textarea>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </form>
      <div class="content-block-title">I like</div>
      <form id="demoform-2" class="store-data list-block">
        <ul>
          <li>
            <label class="label-checkbox item-content">
              <input type="checkbox" name="ks-checkbox" value="Books" checked="checked">
              <div class="item-media"><i class="icon icon-form-checkbox"></i></div>
              <div class="item-inner">
                <div class="item-title">Books</div>
              </div>
            </label>
          </li>
          <li>
            <label class="label-checkbox item-content">
              <input type="checkbox" name="ks-checkbox" value="Movies">
              <div class="item-media"><i class="icon icon-form-checkbox"></i></div>
              <div class="item-inner">
                <div class="item-title">Movies</div>
              </div>
            </label>
          </li>
          <li>
            <label class="label-checkbox item-content">
              <input type="checkbox" name="ks-checkbox" value="Food">
              <div class="item-media"><i class="icon icon-form-checkbox"></i></div>
              <div class="item-inner">
                <div class="item-title">Food</div>
              </div>
            </label>
          </li>
          <li>
            <label class="label-checkbox item-content">
              <input type="checkbox" name="ks-checkbox" value="Drinks">
              <div class="item-media"><i class="icon icon-form-checkbox"></i></div>
              <div class="item-inner">
                <div class="item-title">Drinks</div>
              </div>
            </label>
          </li>
        </ul>
      </form>
    </div>
  </div>
</template>
