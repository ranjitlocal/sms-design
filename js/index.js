package org.ranjit.javacudo;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.BeanNameAware;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;




public class Triangle implements ApplicationContextAware, BeanNameAware {
	
	private Point point1;
	private Point point2;
	private Point point3;
	private ApplicationContext applicationContext;
	
	public Point getPoint1() {
		return point1;
	}

	public void setPoint1(Point point1) {
		this.point1 = point1;
	}

	public Point getPoint2() {
		return point2;
	}

	public void setPoint2(Point point2) {
		this.point2 = point2;
	}

	public Point getPoint3() {
		return point3;
	}

	public void setPoint3(Point point3) {
		this.point3 = point3;
	}

	public void draw()
	{
		System.out.println("Triangle Drawn with following points.");
		System.out.println("PointA :("+point1.getX()+","+point1.getY()+")");
		System.out.println("PointA :("+point2.getX()+","+point2.getY()+")");
		System.out.println("PointA :("+point3.getX()+","+point3.getY()+")");
		System.out.println("Bean Name ->"+applicationContext.getBean("triangle"));
	}

	@Override
	public void setApplicationContext(ApplicationContext applicationContext)
			throws BeansException {
		this.applicationContext = applicationContext;
	}

	@Override
	public void setBeanName(String beanName) {

		System.out.println("Bean Name is :"+beanName);
	}
}
