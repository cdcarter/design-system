/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const React = require('react');
const ButtonIcon = require('ui/components/buttons/flavors/icon/index.react');
const Input = require('ui/components/forms/flavors/input/index.react');
const Menu = require('ui/components/dropdowns/index.react');
const SvgIcon = require('app_modules/ui/svg-icon');
const componentUtil = require('app_modules/ui/util/component');
const pf = componentUtil.prefix;

module.exports = (
<div className='demo-only' style={{height: '350px'}}>

  <div className={pf('lookup')} data-select="multi" data-scope="single" data-typeahead="true">
    <div className={pf('form-element')}>
      <label className={pf('form-element__label')} htmlFor="lookup">Accounts</label>
      <div className={pf('form-element__control input-has-icon input-has-icon--right')}>
        <SvgIcon className={pf('input__icon')} sprite="utility" symbol="search" />
        <input id="lookup" className={pf('input')} type="text" aria-autocomplete="list" role="combobox" aria-expanded="true" aria-activedescendant="" />
      </div>
    </div>
    <div className={pf('lookup__menu')} role="listbox">
      <div className={pf('lookup__item')}>
        <button className={pf('button')}>
          <SvgIcon className={pf('icon icon-text-default icon--small')} sprite="utility" symbol="search" />
          "ac" in Accounts
        </button>
      </div>
      <ul className={pf('lookup__list')} role="presentation">
        <li className={pf('lookup__item')}>
          <a id="s01" href="#" role="option">
            <SvgIcon className={pf('icon icon-standard-account icon--small')} sprite="standard" symbol="account" />
            Paddy's Pub
          </a>
        </li>
        <li className={pf('lookup__item')}>
          <a id="s02" href="#" role="option">
            <SvgIcon className={pf('icon icon-standard-account icon--small')} sprite="standard" symbol="account" />
            Tyrell Corporation
          </a>
        </li>
        <li className={pf('lookup__item')}>
          <a id="s03" href="#" role="option">
            <SvgIcon className={pf('icon icon-standard-account icon--small')} sprite="standard" symbol="account" />
            Paper St. Soap Company
          </a>
        </li>
        <li className={pf('lookup__item')}>
          <a id="s04" href="#" role="option">
            <SvgIcon className={pf('icon icon-standard-account icon--small')} sprite="standard" symbol="account" />
            Nakatomi Investments
          </a>
        </li>
        <li className={pf('lookup__item')}>
          <a id="s05" href="#" role="option">
            <SvgIcon className={pf('icon icon-standard-account icon--small')} sprite="standard" symbol="account" />
            Acme Landscaping
          </a>
        </li>
        <li className={pf('lookup__item')}>
          <a id="s06" href="#" role="option">
            <SvgIcon className={pf('icon icon-standard-account icon--small')} sprite="standard" symbol="account" />
            ACME Construction
          </a>
        </li>
      </ul>
      <div className={pf('lookup__item')}>
        <button className={pf('button')}>
          <SvgIcon className={pf('icon icon-text-default icon--small')} sprite="utility" symbol="add" />
          Add Account
        </button>
      </div>
    </div>
  </div>

</div>
);
