export async function getVans(id) {
  // const url = id ? `/api/vans/${id}` : "/api/vans";
  const url = id
    ? `http://localhost:3000/vans/${id}`
    : "http://localhost:3000/vans";
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans;
}

export async function getHostVans(id) {
  // const url = id ? `/api/host/vans/${id}` : "/api/host/vans";
  const url = id
    ? `http://localhost:3000/host/vans/${id}`
    : "http://localhost:3000/host/vans";
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  // console.log(data);
  return data.vans;
}
