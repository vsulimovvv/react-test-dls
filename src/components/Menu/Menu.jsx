import React from 'react';
import './Menu.scss';
import dataMenu from '../../utils/dataMenu';

const Menu = () => {
  return (
    <div className="menu">
      <ul className="menu__list">
        {dataMenu.map((item) => {
          return (
            <li key={item.id} className="menu__item">
              {item.items.length ? (
                <>
                  <a className="menu__link" href="#">
                    {item.name}
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="currentColor"
                        strokeLinecap="square"
                      />
                    </svg>
                  </a>

                  <div class="dropdown">
                    <ul class="dropdown__list">
                      {item.items?.map((el) => {
                        return (
                          <li key={el} className="dropdown__item">
                            <a class="dropdown__link" href="#">
                              <span>{el}</span>
                              <svg
                                width="6"
                                height="9"
                                viewBox="0 0 6 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.33334 7.7L4.66668 4.5L1.33334 1.3"
                                  stroke="black"
                                  strokeLinecap="square"
                                />
                              </svg>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </>
              ) : (
                <a className="menu__link" href="#">
                  {item.name}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
