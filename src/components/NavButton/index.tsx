import React, { useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import { Li } from './styles';

interface Section{
  changeNav: (name:string) => void;
  realName: string;
  children: string;
  nav: string;
}

export function NavButton({changeNav, realName, children, nav}:Section) {

  return (
    <Li name={realName} nav={nav}><a onClick={() => {
      changeNav(realName);
      window.scrollTo(0, document.getElementById(realName)!.offsetTop - document.getElementById('header')!.offsetHeight)
      if(document.querySelectorAll('ul')[0].className === 'ul-show'){
        document.querySelectorAll('ul')[0].style.animation = 'headerPop 0.25s';
        setTimeout(() => {
          document.querySelectorAll('ul')[0].className = '';
          document.querySelectorAll('ul')[0].style.animation = 'headerFixed 0.25s ease-out';
        }, 250);
      }
    }}>{children}</a></Li>
  )
}