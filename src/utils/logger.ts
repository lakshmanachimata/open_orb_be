
export const log = (module : string ,data : any) => {
    console.log("hnapp log :: " + module + " :: => " + JSON.stringify(data))
};

export const error = (module : string ,data : any) => {
    console.log("hnapp error :: " + module + " :: => " + JSON.stringify(data))
};

export const warning = (module : string ,data : any) => {
    console.warn("hnapp warning :: " + module + ":: => " + JSON.stringify(data))
};

export const info = (module : string ,data : any) => {
    console.warn("hnapp info :: " + module + " :: => " + JSON.stringify(data))
};

export const timestart = (module : string ,data : any) => {
    console.time("hnapp timestart :: " + module + " :: => " + JSON.stringify(data))
};
export const timelog = (module : string ,data : any) => {
    console.timeLog("hnapp timelog :: " + module + " :: => " + JSON.stringify(data))
};

export const timeend = (module : string ,data : any) => {
    console.timeEnd("hnapp timelog :: " + module + " :: => " + JSON.stringify(data))
};
  
export const trace = (module : string ,data : any) => {
    console.trace("hnapp trace :: " + module + " :: => " + JSON.stringify(data))
};
  
  
 let logger =  {
    log,error,warning,info,timestart,timelog,timeend,trace
  };
  export default logger;