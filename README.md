<h1>Introducing an iShop</h1>

<p>Welcome to our iShop! We offer a wide range of electronic accessories to enhance your devices and make your tech experience even better. Whether you're looking for chargers, cables, cases, or any other electronic accessory, we've got you covered.</p>

<p>If you have any questions or need assistance, our friendly customer support team is always ready to help. Happy shopping!</p>


<h2>Using docker-compose to run the project </h2>
<ul>
    <li> Install docker and docker-compose and exec cml
    <code> sudo docker-compose up</code>
    </li>
    <li>After done, using <code>sudo docker ps</code> to check ID of container</li>
    <li><code>sudo docker inspect FE</code> (to get ip of container FE or others)</li>
    <li> Check the ip address of fe container and chang to fit in file login (because axios dont get data from postgerss -> solution: Write API connect between container FE and BE) ->>>>> FIXED (using static ip in container)</li>
    <li>Enter <code>http://localhost:5050</code> or <code>http://172.18.0.2:5050</code> to connect pgadmin with username and password in docker-compose
        <ul>
            <li> using availble in file .env of BE to connect it</li>
            <li> Because not have account in log. y maybe create acc using web or postion import to database</li>
        </ul>
    </li>
    <li>Enter <code>http://172.18.0.5:80</code> to using web</li>
    </ul>
<alert>If you have any question. Please connect to me forward email:<email> manhhung20033004@gmail.com</email></alert>
