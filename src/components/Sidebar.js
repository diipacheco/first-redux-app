import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as CourseAction from "../store/actions/course";

const Sidebar = ({ modules, toggleLesson }) => (
	<aside>
		{modules.map(module => (
			<div key={module.id}>
				<strong>{module.title}</strong>
				<ul>
					{module.lessons.map(lesson => (
						<li key={lesson.id}>
							{lesson.title}
							<button onClick={() => toggleLesson(lesson, module)}>
								Select
							</button>
						</li>
					))}
				</ul>
			</div>
		))}
	</aside>
);

const mapStateToProps = state => ({
	modules: state.course.modules
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(CourseAction, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Sidebar);
