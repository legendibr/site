import React, { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  font-family: 'Merriweather', serif;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: rgb(72, 65, 65);
  color: white;
  padding: 10px;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  justify-content: center;
  align-items: center;
`;

const Title = styled(NavLink)`
  position: absolute;
  text-decoration: none;
  text-align: center;
  color: white;
  font-size: 40px;
  font-weight: 600;
  cursor: pointer;
  left: 50%;
  transform: translateX(-50%);
`;

const LINK = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  &:hover {
    text-decoration: underline;
  }
`;

const Root = () => {
  useEffect(() => {
    const handelResize = () => {
      try {
        document.getElementById('menu').remove();
        document.querySelector('ul').remove();
      }
      catch (err) {

      }

      const title = document.getElementById('title');
      const nav = document.querySelector('Nav');
      const links = document.querySelectorAll('.nav-link');

      if (window.innerWidth <= 768) {
        const linkSet = document.createElement('ul');
        linkSet.style.visibility = "hidden";
        linkSet.style.position = 'fixed';
        linkSet.style.top = `${nav.offsetHeight / 2}px`;
        linkSet.style.right = '-50%';
        linkSet.style.backgroundColor = 'rgb(99, 94, 94)';
        linkSet.style.color = 'rgb(255, 255, 255)';
        linkSet.style.padding = '15px 30px';
        linkSet.style.lineHeight = '48px';
        linkSet.style.fontSize = '24px';
        linkSet.style.zIndex = '10';
        linkSet.style.transition = 'all 0.3s ease';

        for (const link of links) {
          const linkLi = document.createElement('li');
          linkLi.innerHTML = link.innerHTML;
          linkLi.onclick = () => {
            link.click();
            linkSet.style.visibility = 'hidden';
            linkSet.style.right = '-50%';
          }
          linkSet.appendChild(linkLi);

          link.style.display = 'none';
        }
        document.getElementById("root").appendChild(linkSet);

        const menu = document.createElement('div');
        menu.id = 'menu';
        menu.style.display = 'flex';
        menu.style.cursor = 'pointer';
        menu.style.justifyContent = 'center';
        menu.style.alignItems = 'center';
        menu.onclick = () => {
          linkSet.style.visibility = linkSet.style.visibility === 'hidden' ? 'visible' : 'hidden';
          linkSet.style.right = linkSet.style.right === '-50%' ? '0px' : '-50%';
        }
        const menuIcon = document.createElement('box-icon');
        menuIcon.setAttribute('name', 'list-ul');
        menuIcon.setAttribute('color', '#ffffff');
        menu.appendChild(menuIcon);
        const menuTitle = document.createElement('a');
        menuTitle.innerHTML = 'Subjects';
        menuTitle.style.color = 'white';
        menuTitle.style.textDecoration = 'none';
        menuTitle.style.fontSize = '20px';
        menuTitle.style.textAlign = 'center';
        menu.appendChild(menuTitle);
        nav.appendChild(menu);

        title.style.position = 'static';
        title.style.fontSize = '30px';
        title.style.transform = 'none';
      } else {
        title.style.fontSize = '40px';
        title.style.position = 'absolute';
        title.style.left = '50%';
        title.style.transform = 'translateX(-50%)';

        for (const link of links) {
          link.style.display = "block";
        }
      }
    }

    window.addEventListener('resize', handelResize);
    handelResize();

    return () => {
      window.removeEventListener('resize', handelResize)
    }
  }, []);

  return (
    <div>
      <Nav>
        <Section>
          <LINK to={`/home`} className={"nav-link"}>Home</LINK>
        </Section>
        <Title to={`/home`} id='title' title='Home'>Legend IBR</Title>
        <Section>
          <LINK to={`/math`} className={"nav-link"}>Math</LINK>
          <LINK to={`/biology`} className={"nav-link"}>Biology</LINK>
          <LINK to={`/cs`} className={"nav-link"}>Computer<br />Science</LINK>
        </Section>
      </Nav>
      <Outlet />
    </div>
  );
};

export default Root;
