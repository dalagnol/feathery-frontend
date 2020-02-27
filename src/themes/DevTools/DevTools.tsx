import React, { useState, useContext } from "react";
import { Container, Collections, Icon } from "./styles/DevTools";
import { ThemeContext } from "styled-components";

import {
  ChatBubble,
  Error,
  Warning,
  FilterList as Filter,
  Info,
} from "styled-icons/material";

import { Cogs } from "styled-icons/icomoon";

import Collection from "./Collection/Collection";
import History from "./History/History";

const LS_LOCK = "theme_devtools_lock";
const LS_HISTORY = "theme_devtools_history";
const LS_FILTER = "theme_devtools_filter";
const LS_SECTIONS = "theme_devtools_sections";

export function DevTools() {
  const [lock, setLock] = useState(!!localStorage.getItem(LS_LOCK));
  const [history, setHistory] = useState(!!localStorage.getItem(LS_HISTORY));

  const [sections, _setSections]: any = useState(
    JSON.parse(localStorage.getItem(LS_SECTIONS)!) || []
  );

  const [filter, _setFilter]: any = useState(
    JSON.parse(localStorage.getItem(LS_FILTER)!) || {
      system: false,
      none: false,
      error: false,
      warning: false,
      info: false,
      filter: false,
    }
  );

  const Context = useContext(ThemeContext);

  const toggle = (state: any, ls: any, set: any, value = "1") => () => {
    if (!state) {
      localStorage.setItem(ls, value);
    } else {
      localStorage.removeItem(ls);
    }
    set(!state);
  };

  const setFilter = (name: any) => () => {
    const res = { ...filter, [name]: !filter[name] };
    localStorage.setItem(LS_FILTER, JSON.stringify(res));

    _setFilter(res);
  };

  const addSection = (name: any) => {
    name = `<${name} />`;
    const res: Array<string> = [...sections, name];
    localStorage.setItem(LS_SECTIONS, JSON.stringify(res));

    _setSections(res);
  };

  const removeSection = (name: string) => {
    name = `<${name} />`;
    const res: Array<string> = sections.filter(
      (section: string) => section !== name
    );
    localStorage.setItem(LS_SECTIONS, JSON.stringify(res));

    _setSections(res);
  };

  const ContextEntries = Object.entries(Context).filter(
    ([key]: any) => key.toLowerCase() === key
  );

  return (
    <Container onClick={toggle(lock, LS_LOCK, setLock)} lock={lock}>
      <div onClick={e => e.stopPropagation()}>
        <div className={"Header"}>
          <h1 onClick={() => Context.SwitchTheme("DevTools")}>
            Theme: {Context.Name.substring(0, 1).toUpperCase()}
            {Context.Name.substring(1).toLowerCase()}
          </h1>
          <p>
            {Context.Themes.map((theme: string, index: number) => (
              <span
                key={index}
                onClick={() => Context.SetName(theme, "DevTools")}
                className={(theme !== Context.Name && "Damp") || "None"}
              >
                {theme}
              </span>
            ))}
          </p>
          <hr />
        </div>

        <Collections history={history} className={"Collections"}>
          {ContextEntries.map(
            ([collection, variables]: [string, any], index: number) => (
              <Collection
                key={index}
                initialOpen={
                  ContextEntries.length < 5 ||
                  sections.includes(
                    `<${collection
                      .substring(0, 1)
                      .toUpperCase()}${collection
                      .substring(1)
                      .toLowerCase()} />`
                  )
                }
                addSection={addSection}
                removeSection={removeSection}
                title={`${collection
                  .substring(0, 1)
                  .toUpperCase()}${collection.substring(1).toLowerCase()}`}
                data={variables}
              />
            )
          )}
        </Collections>

        <div className={"History"}>
          <div className={"Subheader"}>
            <h2 onClick={toggle(history, LS_HISTORY, setHistory)}>History</h2>
            <Icon onClick={setFilter("none")} active={filter.none}>
              <ChatBubble size={24} />
            </Icon>
            <Icon onClick={setFilter("info")} active={filter.info}>
              <Info size={24} />
            </Icon>
            <Icon onClick={setFilter("error")} active={filter.error}>
              <Error size={24} />
            </Icon>
            <Icon onClick={setFilter("warning")} active={filter.warning}>
              <Warning size={24} />
            </Icon>
            <Icon onClick={setFilter("filter")} active={filter.filter}>
              <Filter size={24} />
            </Icon>
            <Icon onClick={setFilter("system")} active={filter.system}>
              <Cogs size={24} />
            </Icon>
          </div>
          <History sections={sections} filters={filter} open={history} />
        </div>
      </div>
    </Container>
  );
}
