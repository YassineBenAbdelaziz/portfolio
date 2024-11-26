import styles from '../Blog.module.css';

const content = (
    <div>
        <h2 className={styles.sectionTitle}>Overview</h2>
        <hr className={styles.divider} />
        <p className={styles.sectionParagraph}>
        Welcome to Point of Sale System, This project is a comprehensive solution for managing retail sales, inventory, and customer loyalty programs. Built with modern web technologies, it streamlines various aspects of running a retail business, from managing stock and sales to applying discount programs and generating insightful reports.
        </p>

        <h2 className={styles.sectionTitle}>Features</h2>
        <hr className={styles.divider} />
        <div className={styles.sectionParagraph}>

            <ul>
                <li><strong>Sales Management:</strong> Efficiently process sales, track transactions, and issue receipts.</li>
                <li><strong>Inventory Management:</strong> Keep track of stock levels, add new products, and manage product categories.</li>
                <li><strong>Price Lists:</strong> Create and manage price lists for special promotions or bulk purchases.</li>
                <li><strong>Loyalty Programs:</strong> Implement customer loyalty programs, including discount coupons and "Buy X, Get Y" offers.</li>
                <li><strong>Reporting:</strong> Generate reports to analyze sales data, inventory status, and customer behavior.</li>
            </ul>
        </div>

        <h2 className={styles.sectionTitle}>Technologies</h2>
        <hr className={styles.divider} />
        <div className={styles.sectionParagraph}>

            <ul>
                <li>Angular</li>
                <li>Tailwind Css</li>
                <li>Nest JS</li>
                <li>TypeOrm</li>
                <li>Postgres</li>
            </ul>
        </div>

        <h2 className={styles.sectionTitle}>Things I Learned</h2>
        <hr className={styles.divider} />
        <div className={styles.sectionParagraph}>
        Working on this project has been an incredible learning experience. Some of the key areas I explored include:
            <ul>
                <li><strong>Database Migrations:</strong> Understanding how to manage database schema changes effectively using TypeORM. </li>
                <li><strong>Tree Entities:</strong>  Leveraging TypeORM's tree structures to implement nested categories, which allowed for efficient storage and retrieval of hierarchical data.</li>
                <li><strong>API Versioning:</strong> Implementing versioning strategies to support backward compatibility.</li>
                <li><strong>Rate Limiting:</strong> Protecting the API from overuse by limiting the number of requests per user.</li>
                <li><strong>Swagger Documentation:</strong> Using Swagger to generate clear and interactive API documentation.</li>
            </ul>
        </div>


        
        <h2 className={styles.sectionTitle}>To-Do List</h2>
        <hr className={styles.divider} />
        <div className={styles.sectionParagraph}>
        This project is still under development. Here are some features and enhancements that are planned for the future:
            <ul>
                
                <li>Add Authentication and Authorization Guards for enhanced security.</li>
                <li>Begin Frontend Development for the admin dashboard and user interface.</li>
                <li>Integrate a Payment Service for handling transactions securely.</li>
                <li>Improve Error Handling and Logging Mechanisms.</li>


            </ul>
        </div>
    </div>
);


export default content;